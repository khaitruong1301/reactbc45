import React, { Component } from 'react'

export default class FormProduct extends Component {

    state = {
        values: {
            id: '',
            name: '',
            image: '',
            price: 0,
            description: '',
            type: 'phone'
        },
        errors: {
            id: '(*)',
            name: '(*)',
            image: '(*)',
            price: '(*)',
            description: '(*)'
        },
        inValid: true


    }


    handleChangeInput = (e) => {
        const { id, value } = e.target;
        //Xử lý values
        let newValues = { ...this.state.values };
        newValues[id] = value;
        //Xử lý errors
        let dataType = e.target.getAttribute('data-type');
        let dataMinMaxLength = e.target.getAttribute('data-min-max-length');
        console.log('dataType', dataType)

        let messageError = '';
        if (value.trim() === '') {
            messageError = id + ' cannot be blank!';
        } else {
            //check validation còn lại
            switch (dataType) {
                case 'number': {
                    let regexNumber = /^[0-9]+$/;
                    if (!regexNumber.test(value)) {
                        messageError = id + ' is numbers';
                    }
                }; break;
                case 'letter': {
                    let regexLetter = /^[A-Z a-záàạảãăặẵẳằắ]+$/;
                    if (!regexLetter.test(value)) {
                        messageError = id + ' is letters';
                    }; break;
                }
            }

            if (dataMinMaxLength) { // "[2,6]" => [2,6]
                let [min, max] = JSON.parse(dataMinMaxLength);
                if (value.length < min || value.length > max) {
                    messageError = id + ` from ${min} - ${max} letter`;
                }
            }
        }
        let newErrors = { ...this.state.errors };
        newErrors[id] = messageError;
        //Checkvalid form
        let res = this.checkInValidForm(newErrors);

        //setState
        this.setState({
            values: newValues,
            errors: newErrors,
            inValid:res
        })
    }

    /**
     * errors:  id: '(*)',
        name: '(*)',
        image: '(*)',
        price: '(*)',
        description: '(*)'
        //Không hợp lệ là đúng thì return true
    }
     */
    checkInValidForm = (errors) => {
        let output = false;
        for (let key in errors) {
            if (errors[key] !== '') {
                output = true;
                break;
            }
        }
        return output;
    }


    handleSubmit = (e) => {
        e.preventDefault(); //chặn sự kiện reload browser

        //Lấy hàm additem từ component cha
        const {addItem} = this.props;
        addItem(this.state.values);
    }

    render() {

        const {id,name,price,image,description,type} = this.state.values;

        console.log(this.state);

        return (
            <form className='card mb-2' onSubmit={this.handleSubmit}>
                <div className='card-header bg-dark text-white'>
                    <h3>Product info</h3>
                </div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>id</p>
                                <input data-min-max-length="[2,6]" data-type="number" className='form-control' id="id" name="id" onInput={this.handleChangeInput} value={id}/>
                                <p className='text text-danger'>{this.state.errors.id}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>name</p>
                                <input data-type="letter" className='form-control' id="name" name="name" onInput={this.handleChangeInput} value={name} />
                                <p className='text text-danger'>{this.state.errors.name}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>image</p>
                                <input className='form-control' id="image" name="image" onInput={this.handleChangeInput} value={image} />
                                <p className='text text-danger'>{this.state.errors.image}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>price</p>
                                <input data-type="number" className='form-control' id="price" name="price" onInput={this.handleChangeInput} value={price} />
                                <p className='text text-danger'>{this.state.errors.price}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>description</p>
                                <input className='form-control' id="description" name="description" onInput={this.handleChangeInput}  value={description} />
                                <p className='text text-danger'>{this.state.errors.description}</p>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='form-group'>
                                <p>type</p>
                                <select value={type} id="type" name="type" className='form-control' onInput={this.handleChangeInput}>
                                    <option value="phone">phone</option>
                                    <option value="laptop">laptop</option>
                                    <option value="tablet">tablet</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='card-footer'>
                    <button className='btn btn-success mx-2' type='submit' disabled={this.state.inValid}>Create</button>
                    <button className='btn btn-primary mx-2' type='button' onClick={()=>{
                        this.props.updateItem(this.state.values);
                    }}>Update</button>
                </div>
            </form>
        )
    }
}
