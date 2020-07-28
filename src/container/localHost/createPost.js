import React, { useState } from 'react';
import styles from './../../RenderPost.module.css';



const CreatePost = (props) => {

    const [inf, setInf] = useState({})

    const onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        setInf({...inf,[name]: value})
    }

    
    const onClear = () => {
        setInf({
            link_image: '',
            name: '',
            man_hinh: '',
            he_dieu_hanh: '',
            camera_sau: '',
            camera_truoc: '',
            cpu: '',
            ram: '',
            bo_nho: '',
            the_nho: '',
            the_sim: '',
            dung_luong: '',
            price: undefined,
            status:true })
            }


    const onSubmit = () => {
        var postId = '_' + Math.random().toString(36).substr(2, 9)
        props.onCreate({...inf,postId});
        onClear()
    }



    return(
        <React.Fragment>
            <button
                className={`btn btn-primary ${styles.btn_create_post}`} 
                data-toggle="modal" href='#modal-id'>
                    <i className="fas fa-plus-square"></i> Create Posts</button>
        <div className="modal fade" id="modal-id">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title"> Create Posts</h4>
                    </div>
                    <div className="modal-body">
                        
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
                            
                            <button 
                                onClick={ onSubmit } 
                                type="button"
                                data-dismiss="modal"
                                className={`btn btn-primary ${styles.btn_submit_create}`}>Submit</button>
                        </form>
                        
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" className="btn btn-default">Close</button>
                        
                    </div>
                </div>
            </div>
        </div>
        
        </React.Fragment>
        
    )
}



export default CreatePost;