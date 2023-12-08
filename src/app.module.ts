import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { ProductModule } from "./product/product.module";
import { ReviewsModule } from './reviews/reviews.module';

@Module({
	imports: [DatabaseModule, ProductModule, ReviewsModule],
	controllers: [],
	providers: []
})
export class AppModule {}
