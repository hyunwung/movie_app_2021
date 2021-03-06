import React from 'react';

function Hello({color,name,isSpecial}){
    return  ( 
    <div style = {{color}}>
        <b>{isSpecial ? '스페셜' : '낫스페셜'}</b>
        안녕하세요{name}
    </div>
    
    );
}
Hello.defaultProps = {
    name:'이름 없음'
}

export default Hello;