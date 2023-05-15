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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [],
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
