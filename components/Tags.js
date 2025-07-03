export default function Tags({ tags }) {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="mt-12 flex flex-wrap justify-center gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded cursor-default select-none">
          {tag}
        </span>
      ))}
    </div>
  );
}
