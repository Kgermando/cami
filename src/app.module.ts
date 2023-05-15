import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { CaisseModule } from './caisses/caisse/caisse.module';
import { BanqueModule } from './banques/banque/banque.module';
import { FinExterieurModule } from './fin-exterieurs/fin-exterieur/fin-exterieur.module';
import { LigneBudgetaireModule } from './budgets/ligne-budgetaire/ligne-budgetaire.module';
import { BudgetModule } from './budgets/budget/budget.module';
import { FinExterieurDepModule } from './fin-exterieurs/fin-exterieur-dep/fin-exterieur-dep.module';
import { CaisseDepModule } from './caisses/caisse-dep/caisse-dep.module';
import { BanqueDepModule } from './banques/banque-dep/banque-dep.module';
import { DetteModule } from './dette/dette.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.port'),
        username: configService.get<string>('database.user'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.db'),
        ssl: {
          ca: configService.get<string>('database.ca'),
        },
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    CommonModule,
    UserModule,
    AuthModule,
    CaisseModule,
    BanqueModule,
    FinExterieurModule,
    LigneBudgetaireModule,
    BudgetModule,
    FinExterieurDepModule,
    CaisseDepModule,
    BanqueDepModule,
    DetteModule,
  ],
})
export class AppModule { }
