import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class ReviewsService {
	constructor(private readonly database: DatabaseService) {}
	async create(createReviewDto: Prisma.ReviewCreateInput) {
		return this.database.review.create({ data: createReviewDto });
	}

	async findAll() {
		return this.database.review.findMany({});
	}

	async findOne(id: number) {
		return this.database.review.findUnique({ where: { id } });
	}

	async update(id: number, updateReviewDto: Prisma.ReviewUpdateInput) {
		return this.database.review.update({ where: { id }, data: updateReviewDto });
	}

	async remove(id: number) {
		return this.database.review.delete({ where: { id } });
	}
}
