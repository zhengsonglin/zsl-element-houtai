      function checkemail(){
        var regEmail=/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
        if(this.email==''){
          this.msgmail="请输入邮箱";
        }else if(!regEmail.test(this.email)){
          this.msgmail="邮箱格式不正确";
          }
        }
        function checkpassword(){
            var pwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;//
          var value = $('#test').val();
          if(this.password==""){
            this.msgpassword = "密码不能为空"
          }else if(!pwdReg.test(value)){
            this.msgpassword = "密码不合法";
          }else{
            this.msgpassword = "密码合法";
          }
            }

            function checkpwd(){
                if(this.pwd==""){
                    this.msgpassword ="密码不能为空"
                }else if(this.pwd !=this.password){
                    this.msgpwd = "输入密码保持一致"
                }else{
                    this.msgpwd ="输入密码正确"
                }
            }
			function checkphone(){
                var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
                if(this.phone==""){
                    this.msgphone="手机号不能为空";
                }else if(!myreg.test($("#phone").val())){
                    this.msgphone="请输入有效的手机号码";
                }else{
                    this.msgphone="输入正确"
                }
            }
            function checkage(){
                if(this.age==""){
                    this.msgage = "年龄不能为空"
                }else{
                    this.msgage="输入正确"
                }
            }
        