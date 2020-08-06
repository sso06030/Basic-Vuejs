<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{name}}</p>
        <button @click="updateName">Change name</button>
    </div>
</template>

<script>
export default {
    // propts : 컴포넌트 사용 시 인자로 받음
    // props에 사용하는 것은 다른 곳에서 사용 X(data()..)
    // 받은 props는 컴포넌트에서 변경하면 안됨 
        // updateName() : 직접적으로 변경 시 warning 뜸
        // name은 부모 컴포넌트에서 보내주는 것이므로 여기서 바꾸면 부모에서도 바꿔버리고 양쪽에서 바꾸면 헷갈릴 수 있으므로 자식에서 직접저긍로 바꾸지 않고 부모에서 바꿔주면 자식 컴포넌트에 있는 값도 저절로 같이 업데이트됨.
        // name을 변경하고 싶을 경우 method로 직접 변경하는 것이 아닌, 부모로 event를 보내서 바꿔달라 요청 후 이벤트를 받은 부모가 바꿔주는 형식을 이용.

    props:{
        title:{
            type: String,
            //required: false,
            default:'default title'
        },
        name:{
            type: String,
            default:'default name'
        }
    },
    data(){
        return {
            //name:'Kozy'
        }
    },
    methods:{
        updateName(){
            this.name = 'Kozy Updated'
        }
    }
}
</script>

<style scoped>

</style>