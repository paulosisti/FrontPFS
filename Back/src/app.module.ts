import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
// import { UsersModule } from './users/users.module';

@Module({
  imports: [ProdutosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
