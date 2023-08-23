import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  HttpStatus,
  Res,
  ValidationPipe,
  HttpException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InstitutionService } from './institution.service';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { Response } from 'express';
import { isValidObjectId } from 'mongoose';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import {
  ApiBadGatewayResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiAcceptedResponse,
  ApiFoundResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiTags,

} from '@nestjs/swagger/dist';
import { type } from 'os';
import { Institution, InstitutionSchema } from 'src/schema/institution.schema';
import { InstitutionType } from 'src/schema/institutionType.schema';
import { InstituteEntity } from 'src/entities/institution.entites';
import { ErrorEntity } from 'src/entities/error.entities';
import { UpdateEntity } from 'src/entities/update-error.entities';

@ApiTags('Institution')
@Controller('/api/v1/institution')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  // Post api to create institute and validate request.body data
  @ApiCreatedResponse({
    description: 'Institute Created Successfully!',
    type: InstituteEntity,
    isArray: false,
  })
  @ApiBadRequestResponse({
    description: 'Invalid request body ',
    type: ErrorEntity,
  })

  @Post('create-institution')
  async create(
    @Res() response: Response,
    @Body(new ValidationPipe({ transform: true }))
    createInstitution: CreateInstitutionDto,
  ) {
    if (!createInstitution) {
      throw new HttpException('Invalid request body', HttpStatus.BAD_REQUEST);
    }
    // create service
    const institutionData = await this.institutionService.create(
      createInstitution,
    );
    if (!institutionData) {
      throw new NotFoundException('No institute found');
    }
    return response.status(HttpStatus.CREATED).json({
      message: 'Institute Created Successfully!',
      institutionData,
    });
  }

  // -----find

  @Get('get-institutions')
  @ApiOkResponse({
    description: 'Institutions fetched successfullyn',
  })
  @ApiNotFoundResponse({
    description: 'No institutions data Found',
  })
  async findAll(@Res() response: Response) {
    const allInstitutionData = await this.institutionService.findAll();

    if (!allInstitutionData.length) {
      throw new NotFoundException('No institutions data found');
    }

    return response.status(HttpStatus.OK).json({
      message: 'Institutions fetched successfully',
      data: allInstitutionData,
    });
  }

  @ApiOkResponse({
    description: 'Institution fetched successfully',
    type: InstituteEntity,
  })
  @ApiNotFoundResponse({
    description: 'No institutions data Found',
  })
  @ApiBadRequestResponse({
    description: 'Invalid institute ID',
  })
  @Get('get-institution/:id')
  async findOne(
    @Res() response: Response,
    @Param('id', new ValidationPipe({ transform: true })) id: string,
  ) {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid institute ID');
    }

    const institutionData = await this.institutionService.findOne(id);

    if (!institutionData) {
      throw new NotFoundException('No institute found');
    }

    return response.status(HttpStatus.OK).json({
      message: 'Institution fetched successfully',
      data: institutionData,
    });
  }

  @ApiOkResponse({
    description: 'Institute updated successfully',
    type: InstituteEntity,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type:  UpdateEntity,
  })
  @ApiNotFoundResponse({
    description: 'No institute found with given Id',
  })
  @Put('update-institution')
  async update(
    @Res() response: Response,
    @Body(new ValidationPipe({ transform: true }))
    updateInstitution: UpdateInstitutionDto,
  ) {
    const institutionData = await this.institutionService.update(
      updateInstitution,
    );

    if (!institutionData) {
      throw new NotFoundException('No institute found');
    }

    return response.status(HttpStatus.OK).json({
      message: 'Institute updated successfully',
      data: institutionData,
    });
  }

  @ApiOkResponse({
    description:"Institution Deleted Successfully!"
    
  })
  @ApiBadRequestResponse({
    description:"Invalid institute ID"
    
  })
  @ApiNotFoundResponse({
    description:"Institution not found"
    
  })
  @Delete('delete-institution/:id')
  async remove(
    @Res() response: Response,
    @Param('id', new ValidationPipe({ transform: true })) id: string,
  ) {
    if (!isValidObjectId(id)) {
      throw new HttpException('Invalid institute ID', HttpStatus.BAD_REQUEST);
    }
    const data = await this.institutionService.remove(id);

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
