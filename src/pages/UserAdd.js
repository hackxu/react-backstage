import React from 'react';
import axios from 'axios'

class UserAdd extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: 0,
            gender: ''
        }
    }

    handleValueChange(field, value, type = 'string') {
        if (type === 'number') {
            value = +value
        }
        console.log(field, value, type)

        this.setState({
            [field]: value
        })
    }

    handleSubmit(e) {
        var that = this;
        e.preventDefault();
        console.log(JSON.stringify(this.state))
        //发送一个`POST`请求
        axios.post('http://localhost:3001/user', {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender
        })
            .then(function (res) {
                console.log(res);
                if (res.data.id) {
                    alert('添加用户成功')
                    that.setState({
                        name: '',
                        age: 0,
                        gender: ''
                    })
                } else {
                    alert("添加失败")
                }
            })
            .catch(function (err) {
                console.log(err);
            });


    }

    render() {
        const {name, age, gender} = this.state;
        return (
            <div>
                <header>
                    <h1>添加用户</h1>
                </header>

                <main>
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <label>用户名：</label>
                        <input type="text" value={name}
                               onChange={(e) => this.handleValueChange('name', e.target.value)}/>
                        <br/>
                        <label>年龄：</label>
                        <input type="number" value={age || ''}
                               onChange={(e) => this.handleValueChange('age', e.target.value, 'number')}/>
                        <br/>
                        <label>性别：</label>
                        <select value={gender} onChange={(e) => this.handleValueChange('gender', e.target.value)}>
                            <option value="">请选择</option>
                            <option value="male">男</option>
                            <option value="female">女</option>
                        </select>
                        <br/>
                        <br/>
                        <input type="submit" value="提交"/>
                    </form>
                </main>
            </div>
        );
    }
}

export default UserAdd;