export const Blogs = ({ blogs }: { blogs: BlogMetaT[] | undefined }) => {
  if (!blogs || blogs.length < 0) {
    return 'Something went wrong';
  }

  return (
    <div className='flex flex-col gap-y-5'>
      {blogs?.map((blog) => (
        <div key={blog.id}>
          {blog.title} {blog.id}
        </div>
      ))}
    </div>
  );
};
