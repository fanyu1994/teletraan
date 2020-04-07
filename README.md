# DEMO
*******************==========================*****************
## 环境依赖
 
 * node v12.13.0

## 技术栈

 * webpack + vue + vue-router + stylus + echarts + bootstrap

## 部署步骤

 1.npm install //依赖配置下载安装
 2.npm run dev //运行

## 使用介绍

 ###### 账号：

   1、账号：admin 密码：0 这个能看到所有人详细信息的账号

   2、员工部分账号在public文件夹下的user.js里面查看
 ###### 图标：
   1、条形图主要展示了员工自己在左右人中的排名，有自己的详细数据（排名+业绩）
      通过在图上滚动鼠标来获取详细信息
   2、饼图主要展示各区间所占比重信息，图例和条形图一一对照


## 目录结构

teletraan/
   ├──node_modules                           # 第三方依赖
   ├──public                                 # 公共文件夹
   ├──font                                   # 字体资源文件夹
   ├──img                                    # 图片资源文件夹
   ├──data.js                                # 用到的数据资源
   ├──favicon.ico                            # 网站图标
   ├──index.html                             # 主页模板
   ├──user.js                                # 账号密码
   ├──src                                    # 项目源码(主要文件)
      ├──components                          # 组件
         ├──alert.vue                        # 警示框组件
         ├──aside.vue                        # 侧边栏组件
         ├──footer.vue                       # 底边栏组件
         ├──header.vue                       # 头部栏组件
         ├──main.vue                         # 主体内容组件
         ├──mainLeft.vue                     # 条形图组件
         ├──mainRight.vue                    # 饼图组件
      ├──css                                 # 样式
         ├──aside.styl                       # 侧边栏样式
         ├──herder.styl                      # 头部栏样式
         ├──login.styl                       # 登录页样式
         ├──main.styl                        # 主体样式
      ├──pages                               # 页面
         ├──info.vue                         # 主要内容页面
         ├──login.vue                        # 登录页面
      ├──app.vue                             # 根组件
      ├──main.js                             # 项目入口文件
   ├──.babelrc                               # babel编译配置
   ├──package-lock.json                      # 锁定依赖版本号
   ├──package.js                             # 项目基本信息
   ├──README.md                              # 本页面，注解信息
   ├──webpack.config.js                      # webpack打包配置
   ├──yarn-error.log                         # 安装错误日志信息
   ├──yarn.lock                              # Yarn自动生成处理依赖


