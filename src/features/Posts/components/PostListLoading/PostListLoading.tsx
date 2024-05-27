import Card from "@/components/ui/Card";
import PostItemLoading from "../PostItemLoading";

export default function PostListLoading() {
  const items = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div className="flex flex-col w-full gap-4">
      {items.map((item) => (
        <PostItemLoading />
      ))}
    </div>
  );
}
