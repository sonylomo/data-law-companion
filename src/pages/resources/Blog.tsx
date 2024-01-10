import { useEffect, useState } from "react";
import { sanityClient } from "../../sanityClient.ts";
import BlogCard from "../../components/resources/BlogCard";
import { BlogPostType } from "../../types/index";

const BlogPost = () => {
  const [allPostsData, setAllPosts] = useState<BlogPostType[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                _id,
                url
                }
            }
          }`
      )
      .then((data: BlogPostType[]) => {
        setAllPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-4 pb-16 h-auto">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="uppercase text-2xl sm:text-3xl font-semibold">
          Featured Blogs
        </h1>
        {/* <HeroCard HeroCardProps={NewsData[0]} /> */}
      </div>

      {/* search */}
      {/* <h2 className="text-2xl max-w-screen-lg mx-auto">News Articles</h2> */}

      {/* <div className="border-t border-[#9DA0AC] w-full mt-10 mx-auto my-14" /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
        {allPostsData &&
          allPostsData.map((post) => {
            return <BlogCard key={crypto.randomUUID()} BlogCardProps={post} />;
          })}
      </div>
    </div>
  );
};

export default BlogPost;
// {allPostsData &&
//         allPostsData.map((post, index) => (
//           <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
//             <span key={index}>
//               <img src={post.mainImage.asset.url} alt="" />
//               <span>
//                 <h2>{post.title}</h2>
//               </span>
//             </span>
//           </Link>
//         ))}
