import { TESTIMONIALS } from "@/lib/testimonials";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "6", 10);

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = TESTIMONIALS.slice(start, end);
  const hasMore = end < TESTIMONIALS.length;

  return Response.json({ items, hasMore, total: TESTIMONIALS.length, page, pageSize });
}
