import React from 'react';
import styles from './../RenderPost.module.css';

const PostItem = (props) => {
    return(
        <tr>
                            <td>
                            <div data-toggle='modal' href={`#modal-id2${props.post.id}`}>
                            <div className={ props.post.status === 'true'? 'panel panel-success': 'panel panel-danger'}>
                                    <div className='panel-heading'>
                                    <h3 className='panel-title'>{props.post.name}</h3>
                                    </div>
                                    <div className={`panel-body ${styles.panelbody_pr}`}>
                                        <img
                                            src={props.post.link_image}
                                            className={`img-responsive ${styles.img_product}`}
                                            alt='sfmage'
                                        />
                                        <ul className={styles.titile_inf}>
                                            <li>Màn hình: {props.post.man_hinh}</li>
                                            <li>Hệ điều hành: {props.post.he_dieu_hanh}</li>
                                            <li>Camera sau: {props.post.camera_sau}</li>
                                            <li>Camera trước: {props.post.camera_truoc}</li>
                                        </ul>
                                    </div>
                                    
                                    <div className={`panel panel-default ${styles.panelfooter}`}>
                                          <div className="panel-body">
                                                <h3>{props.post.price}</h3>
                                          </div>
                                          <div className="panel-footer">
                                                Comment
                                            </div>
                                    </div>
                                    
                                </div>
                            </div>

        <div className='modal fade' id={`modal-id2${props.post.id}`}>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <button type='button' className='close' data-dismiss='modal' aria-hidden='true'>
                            &times;
                        </button>
                        <h4 className='modal-title'>{props.post.name}</h4>
                    </div>
                    <div className='modal-body' >
                        
                        <div className="row">
                            
                            
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                
                                <img 
                                    src={props.post.link_image}
                                    title={props.post.name}
                                    alt={props.post.name}
                                    className={styles.img_product}
                                />
                                
                            </div>

                            
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Màn hình</th>
                                            <td>{props.post.man_hinh}</td>
                                        </tr>
                                        <tr>
                                            <th>Hệ điều hành</th>
                                            <td>{props.post.he_dieu_hanh}</td>
                                        </tr>
                                        <tr>
                                            <th>Camera sau</th>
                                            <td>{props.post.camera_sau}</td>
                                        </tr>
                                        <tr>
                                            <th>Camera trước</th>
                                            <td>{props.post.camera_truoc}</td>
                                        </tr>
                                    </thead>
                                    
                                </table>
                            </div>
                        </div>

                        
                    </div>
                            <div className='modal-footer'>
                                <button type='button' className='btn btn-default' data-dismiss="modal">
                                    Close
                                </button>
                                { props.editPost }
                            </div>

                </div>
            </div>
        </div>

            </td>
        </tr>
    )

}

export default PostItem;