const BlogPageHeader = () => import('@modules/blog/BlogPageHeader');
const BlogPageFooter = () => import('@modules/blog/BlogPageFooter');
const BlogMainPage = () => import('@modules/blog/BlogMainPage');
const BlogHome = () => import('@modules/blog/BlogHome');

let blogRouter = [{
  path: '/home/blog',
  component: BlogHome,
  children: [{
    path: '/home/blog',
    components: {
      'blog-header': BlogPageHeader,
      'blog-footer': BlogPageFooter,
      'blog-center': BlogMainPage
    }
  }]
}]

export default blogRouter;