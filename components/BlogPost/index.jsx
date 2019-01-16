import { h } from 'preact';
import Post from '../Post';
import Posts from './data';
import styles from './style';

const BlogPost = () => (
	<div className={styles.blogContainer}>
		<p className={styles.title}>Blog</p>

		<div className={styles.coreTeamContainer}>
			<div className={styles.teamWrapper}>
				{
					Posts.map(post => (
						<Post
							img={post.img}
							title={post.title}
							postLink={post.postLink}
						/>
					))
				}
			</div>
		</div>
	</div>
);

export default BlogPost;
