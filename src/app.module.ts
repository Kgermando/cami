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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
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
