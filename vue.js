var app = new Vue({
    el: '#app',
    data: {
      status: 1,
      answer1: '',
      answer2: '',
      result: '',
      place: {
        japan:{
          1: '青森',
          2: '沖縄',
          3: '山梨',
        },
        abroad:{
          1: 'スイス',
          2: 'フィリピン',
          3: 'イタリア'
        },
      }
    },
    methods:{
     q1: function(area){
       this.answer1 = area;
       this.status = 2;
     },
     q2: function(name){
       this.answer2 = name;
       this.status = 3;
       this.result = this.place[this.answer1][this.answer2];
     },
     reset: function(){
       this.answer1 = '';
       this.answer2 = '';
       this.result = '';
       this.status = 1;
      }
    }
  });