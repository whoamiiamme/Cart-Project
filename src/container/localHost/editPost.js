import React, { useState} from 'react';

import styles from './../../RenderPost.module.css'


const EditPost = (props) => {
    const [inf, setInf] = useState(props.post)

    const onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        setInf({
            ...inf,[name]: value
        })

    }

    const onDelete = id => {
        props.onDelete(id);
    }


    const onEdit =() => {
        const {id} = props.post
        props.onEdit({...inf,id});
    }

    return (
        <React.Fragment>
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
                                                {props.post.price}
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
                        
                    <form action="" method="POST" className="form-group" >
                        
                        <div className="form-group">
                            <label htmlFor="">Link Image</label>
                            <input 
                                className="form-control" 
                                name="link_image"                       
                                value={ inf.link_image }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Tên</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name"
                                value={ inf.name }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Màn hình</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="man_hinh"
                                value={ inf.man_hinh }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Hệ điều hành</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="he_dieu_hanh"
                                value={ inf.he_dieu_hanh }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>
                       
                        <div className="form-group">
                            <label htmlFor=""> Camera sau</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="camera_sau"
                                value={ inf.camera_sau }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor=""> Camera trước</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="camera_truoc"
                                value={ inf.camera_truoc }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">CPU</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="cpu"
                                value={ inf.cpu }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">RAM</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="ram"
                                value={ inf.ram }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Bộ nhớ trong</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="bo_nho"
                                value={ inf.bo_nho }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Thẻ nhớ</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="the_nho"
                                value={ inf.the_nho }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Thẻ SIM</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="the_sim"
                                value={ inf.the_sim }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Dung lượng pin</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="dung_luong"
                                value={ inf.dung_luong }
                                onChange={ onChange }
                                placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Giá</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="price"
                                value={ inf.price }
                                onChange={ onChange }
                                placeholder="...Đ"/>
                        </div>
                        <label>Số Lượng :</label>
                                    <select
                                    className="form-control"
                                    value={inf.status}
                                    onChange={onChange}
                                    name="status"
                                >
                                    <option value={true}>Còn Hàng</option>
                                    <option value={false}>Hết Hàng</option>
                                </select>
                        
                        
                    </form>

                        
                    </div>
                            <div className='modal-footer'>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    data-dismiss="modal"
                                    onClick={() => onDelete(props.post.id) }    
                                >Delete</button>
                                <button 
                                    type="button"
                                    data-dismiss="modal"
                                    onClick={ onEdit }
                                    className="btn btn-success">Edit</button>
                            </div>

                </div>
            </div>
        </div>

            </td>

        </tr>
        </React.Fragment>
    )
}

export default EditPost;