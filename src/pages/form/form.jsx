import React from 'react';
import { View, Button, Input, RadioGroup, Radio } from '@tarojs/components'
const Form = (props) => {
    let {option} = props;
    const strategies = {
        'input': (options, index)=>{
            return <Input value={options.value} key={`form_${index}`} ref={options.ref}/>;
        },
        'select': (options, index)=>{
            const {list, value, ref} = options;
           
            return (<RadioGroup onChange={handleChange} ref={ref} value={value} key={`form_${index}`}>
              {options.list.map(value=>{
                  return <Radio value={value}>{value}</Radio>
              })}
          </RadioGroup>);
        }
    };
    
    option = option.map(item=>{
        item['ref'] = React.createRef();
        return item;
    });
    const handleChange = (e)=>{
        console.log(e);
    }
    const handleClick = (e)=>{
        const result = props.option.map((item, index)=>{
            const key = item.key||index;
            return {key, value:item.ref?.current?.value};
        });
        props.onsubmit(result);
    }
    return (<View>
        {option.map((item, index)=>{
            return strategies[item.type](item, index);
        })}
        <Button onClick={handleClick}>提交</Button>
    </View>  );
}
 
export default Form;