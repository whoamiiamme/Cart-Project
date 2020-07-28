import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import RenderPosts from './../../component/renderPosts';
import PostSearchControl from './../PostSearchControl';
import PostSortControl from './../PostSortControl';
import CreatePost from './createPost';
import { fetchGetAdmin, fetchPostAdmin, fetchDelAdmin, fetchEditAdmin } from './../../actions/fecthData';
import EditPost from './editPost';
import Pagination from './../pagination';

const DashBoard = props => {
    const [del, SetDel] = useState(false)
    const [edit, setEdit] = useState(false)
    const [create, setCreate] = useState(false)
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState({price:'price' , count: 1 })
    const [curr_page, setCurr_page] = useState(1);
    const [numberPost] = useState(2);
    var posts = props.posts;

    useEffect(() => {
        props.fetchGetAdmin();
    },[del, edit, create]);


    const onSearch = (keys) => {
        setSearch(keys)
    }
    const onSort = (price, count) => {
        setSort({price, count})
    }

    const onCreate = (post) => {
        props.fetchPostAdmin(post)
        setTimeout(() => {
            setCreate(!create);
        },1000)

    }

    const onDelete = (id) => {
        props.fetchDelAdmin(id);

        setTimeout(() => {
            SetDel(!del);
        },1000)
    }
    
    const onEdit =(post) => {
        console.log(post)
        props.fetchEditAdmin(post);
        setTimeout(() => {
            setEdit(!edit);
        },1000)
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
            return <EditPost
                key={index}
                post={post}
                onDelete={onDelete}
                onEdit={onEdit}
                />
        })
    }



    if(!props.isSign){
        return(
            <div className="container">
                <h2>You need to login</h2>
            </div>
        );
    }
    
    return(
        <RenderPosts 

            titile='Danh sách sản phẩm của bạn'
            onSearch={ <PostSearchControl onSearch={ onSearch } /> } 
            createPost={ <CreatePost onCreate={onCreate}/> }
            onSort={ <PostSortControl onSort={onSort} /> }
            onPages={<Pagination oncurr={{total,numberPost,currPage}}  /> }
            
        >
            { posts }
        </RenderPosts>
    );

}


const mapStateToProps = (state) => {
    return {
        isSign: state.auth.isSignIn,
        posts: state.postUser
    }
}

export default connect(mapStateToProps,{ fetchGetAdmin, fetchPostAdmin, fetchDelAdmin, fetchEditAdmin })(DashBoard);