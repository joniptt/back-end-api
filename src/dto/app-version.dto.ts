import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class AppVersionDto {
  @IsNotEmpty()
  @IsString()
  versao: string;

  @IsNotEmpty()
  @IsString()
  versaoAndroid: string;

  @IsNotEmpty()
  @IsString()
  versaoIos: string;

  @IsNotEmpty()
  @IsString()
  versaoAPK: string;

  @IsNotEmpty()
  @IsBoolean()
  maintenance: boolean;
}
