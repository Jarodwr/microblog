type Post = {
  readonly id: string;
  readonly title: string;
  readonly date: Date;
  readonly content: string; //this is an HTML string, easier for me to format
  readonly tag: string;
  readonly previous?: Post;
}

export default Post;