import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';

import PostItem from './../component/PostItem';
import RenderPosts from './../component/renderPosts';
import PostSearchControl from './PostSearchControl';
import PostSortControl from './PostSortControl';
import { fetchGet } from './../actions/fecthData';
import Pagination from './pagination';

const ModelPost = (props) => {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState({price:'price' , count: 1 });
    const [curr_page, setCurr_page] = useState(1);
    const [numberPost] = useState(3);
    var posts = props.posts;



    
    useEffect(() => {
        props.fetchGet()
    },[]);



    const onSearch = (keys) => {
        setSearch(keys)
    }

    const onSort = (price, count) => {
        setSort({price, count})
    }

    const currPage = pages => {
        setCurr_page(pages);
    }

    const locationLastPost = curr_page*numberPost;
    const locationFistPost = locationLastPost - numberPost;
    

    posts = posts.filter((post) => {
        return post.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if(sort.price  === 'price'){
        posts.sort((post1, post2) => {
            if(post1.price > post2.price) return sort.count;
            else if(post1.price < post2.price) return -sort.count;
            else return 0;
        });
    }else{
        posts.sort((post1, post2) => {
            if(post1.status > post2.status) return -sort.count;
            else if(post1.status < post2.status) return sort.count;
            else return 0;
        });
    }

    const total = posts.length;

    posts = posts.slice(locationFistPost, locationLastPost);


    if(posts.length > 0) {
        posts = posts.map((post,index)=>{
            return <PostItem
                key={index}
                post={post}
            />
        })
    }


    return(
        <RenderPosts 
            titile='Danh sách các sản phẩm có trong cửa hàng' 
            onSearch={ <PostSearchControl onSearch={ onSearch } /> } 
            onSort={ <PostSortControl onSort={onSort} /> }
            onPages={ <Pagination oncurr={{total,numberPost,currPage}} /> }
        >
            { posts }
        </RenderPosts>
    );
}

const mapStateToProps = state => {
    return{
        posts: state.listposts
    }
}

export default connect(mapStateToProps,{
    fetchGet
}) (ModelPost);