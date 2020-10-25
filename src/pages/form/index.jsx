import React from 'react';
import Form from './form';
import { View } from '@tarojs/components'
const Index = (props) => {
    const strategies = [
        {
            type: 'input',
            value: '123',
            class: 'inputclass'
        },
        {
            type: 'select',
            list: ['123', '456'],
            class: 'selectClass',
            value: '123'
        }
    ];
    const handleSubmit=(e)=>{
        console.log(e);
    }
    return ( 
        <View className='index'>
            <Form option={strategies} onsubmit={handleSubmit}></Form>
        </View>
     );
}
 
export default Index;