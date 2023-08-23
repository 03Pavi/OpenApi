import {
  Controller,
  Get,
  Res,
  Post,
  Body,
  Param,
  Delete,
  ValidationPipe,
  HttpException,
  HttpStatus,
  NotFoundException,
  Put,
  BadRequestException,
} from '@nestjs/common';
import { InstitutionTypeService } from './institution-type.service';
import { CreateInstitutionTypeDto } from './dto/create-institution-type.dto';
import { isValidObjectId } from 'mongoose';
import { Response } from 'express';
import { UpdateInstitutionTypeDto } from './dto/update-institution-type.dto';
import {
  ApiBadGatewayResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiAcceptedResponse,
  ApiFoundResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiTags,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger/dist';
import { ErrorEntity } from 'src/entities/Type/Error.entities';
import { InstituteTypeEntity } from 'src/entities/Type/institution-type.enitities';
import { type } from 'os';
import { Update } from 'src/entities/Type/update';
import { UpdateEntity } from 'src/entities/update-error.entities';
import { UpdateErrorEntity } from 'src/entities/Type/update-error.entities';

// ------
@ApiTags('Institution-type')
// ------

@Controller('/api/v1/institution-type')
export class InstitutionTypeController {
  constructor(
    private readonly institutionTypeService: InstitutionTypeService,
  ) {}

  @ApiCreatedResponse({
    type: InstituteTypeEntity,
    description: 'Institute-type Created Successfully!',
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: ErrorEntity,
  })
  @Post('create-institution-type')
  async create(
    @Res() response: Response,
    @Body(new ValidationPipe({ transform: true }))
    createInstitutionType: CreateInstitutionTypeDto,
  ) {
    const newInstitution = await this.institutionTypeService.create(
      createInstitutionType,
    );

    if (!newInstitution) {
      throw new HttpException('Invalid request body', HttpStatus.BAD_REQUEST);
    }

    return response.status(HttpStatus.CREATED).json({
      success: true,
      message: 'Institute type Created Successfully!',
      newInstitution,
    });
  }

  @ApiNotFoundResponse({
    description: 'No institutions found',
  })
  @ApiOkResponse({
    description: 'Successfully fetched Institution-type data',
  })
  @Get('get-institution-types')
  async findAll(@Res() response: Response) {
    const institutionsData = await this.institutionTypeService.findAll();
    if (!institutionsData || institutionsData.length == 0) {
      throw new NotFoundException('No institutions found');
    }
    return response.status(HttpStatus.OK).json({
      success: true,
      message: 'Institution type data',
      institutionsData,
    });
  }

  @ApiBadRequestResponse({
    description: 'Invalid institute ID',
  })
  @ApiNotFoundResponse({
    description: 'No institute found',
  })
  @ApiOkResponse({
    description: 'Institution fetched successfully',
    type: InstituteTypeEntity,
  })
  @Get('get-institution-type/:id')
  async findOne(
    @Res() response: Response,
    @Param('id', new ValidationPipe({ transform: true })) id: string,
  ) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid institute ID');
    }

    const institutionData = await this.institutionTypeService.findOne(id);

    if (!institutionData) {
      throw new NotFoundException('No institute found');
    }

    return response.status(HttpStatus.OK).json({
      message: 'Institution fetched successfully',
      data: institutionData,
    });
  }

  @ApiOkResponse({
    description: 'Institute-type updated successfully',
    type: Update,
  })
  @ApiNotFoundResponse({
    description: 'No institute-type found',
  })
  @ApiBadRequestResponse({
    type:UpdateErrorEntity
  })
  @Put('update-institution-type')
  async update(
    @Res() response: Response,
    @Body(new ValidationPipe({ transform: true }))
    updateInstitutionType: UpdateInstitutionTypeDto,
  ) {
    const institutionTypeData = await this.institutionTypeService.update(
      updateInstitutionType,
    );

    if (!institutionTypeData) {
      throw new NotFoundException('No institute-type found');
    }

    return response.status(HttpStatus.OK).json({
      message: 'Institute-type updated successfully',
      data: institutionTypeData,
    });
  }

  @ApiNotFoundResponse({
    description: 'Institution not found',
  })
  @ApiBadRequestResponse({
    description: 'Invalid institute ID',
  })
  @ApiOkResponse({
    description: 'Institution Deleted Successfully!',
  })
  @Delete('delete-institution-type/:id')
  async remove(
    @Res() response: Response,
    @Param('id', new ValidationPipe({ transform: true })) id: string,
  ) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid institute ID');
    }

    const data = await this.institutionTypeService.remove(id);

    if (!data) {
      return response.status(HttpStatus.NOT_FOUND).json({
        message: 'Institution not found',
      });
    }

    return response.status(HttpStatus.OK).json({
      message: 'Institution Deleted Successfully!',
    });
  }
}
