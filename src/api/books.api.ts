import { Book } from "../models/book.model";
import { Pagination } from "../models/pagination.model";
import { httpClient } from "./http";

interface FetchBooksParams {
  category_id: number;
  news?: boolean;
  currentPage?: number;
  limit: number;
}

interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams): Promise<FetchBooksResponse> => {
  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", {
      params: params,
    });

    return response.data;
  } catch (error) {
    // API 요청 실패 시 빈 데이터 반환
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};
