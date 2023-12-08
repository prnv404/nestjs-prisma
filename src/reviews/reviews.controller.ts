import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { Prisma } from "@prisma/client";

@Controller("reviews")
export class ReviewsController {
	constructor(private readonly reviewsService: ReviewsService) {}

	@Post()
	async create(@Body() createReviewDto: Prisma.ReviewCreateInput) {
		return this.reviewsService.create(createReviewDto);
	}

	@Get()
	async findAll() {
		return this.reviewsService.findAll();
	}

	@Get(":id")
	async findOne(@Param("id") id: string) {
		return this.reviewsService.findOne(+id);
	}

	@Patch(":id")
	async update(@Param("id") id: string, @Body() updateReviewDto: Prisma.ReviewUpdateInput) {
		return this.reviewsService.update(+id, updateReviewDto);
	}

	@Delete(":id")
	async remove(@Param("id") id: string) {
		return this.reviewsService.remove(+id);
	}
}
