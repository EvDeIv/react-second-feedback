(this["webpackJsonpreact-second-feedback"]=this["webpackJsonpreact-second-feedback"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(3),o=c.n(s),r=(c(13),c(4)),d=c(5),i=c(6),b=c(8),l=c(7),u=c(0),j=function(e){var t=e.message;return Object(u.jsx)("span",{className:"block",children:t})},h=function(e){var t=e.feedbackType,c=e.addFeedback;return Object(u.jsx)("button",{onClick:function(){return c(t)},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize  ml-2 my-2",children:t})},f=function(e){var t=e.stats,c=e.countTotal,a=e.countPositive,n=Object.keys(t);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"text-xl font-bold",children:"Statistics"}),n.map((function(e){return Object(u.jsx)("span",{className:"block capitalize",children:"".concat(e,":").concat(t[e])},e)})),Object(u.jsx)("span",{className:"block capitalize",children:"Total:".concat(c())}),Object(u.jsx)("span",{className:"block capitalize",children:"Positive feedbacks:".concat(a(),"%")})]})},k=function(e){Object(b.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(d.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.addFeedback=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+=1)}))},e.countTotal=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositive=function(){return+(e.state.good/e.countTotal()*100).toFixed(2)},e}return Object(i.a)(c,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"text-xl font-bold",children:"Please leave feedback"}),Object(u.jsx)(h,{feedbackType:"good",addFeedback:this.addFeedback}),Object(u.jsx)(h,{feedbackType:"neutral",addFeedback:this.addFeedback}),Object(u.jsx)(h,{feedbackType:"bad",addFeedback:this.addFeedback}),this.countTotal()>0?Object(u.jsx)(f,{stats:this.state,countTotal:this.countTotal,countPositive:this.countPositive}):Object(u.jsx)(j,{message:"There is no feedback"})]})}}]),c}(a.Component),x=k;o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x,{})})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.bebbcfee.chunk.js.map