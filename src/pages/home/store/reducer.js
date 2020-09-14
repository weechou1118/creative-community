import { v4 as uuid } from 'uuid'
import {
  fromJS
} from 'immutable'

const defaultState = fromJS({
  topicList: [
    { id: uuid(), title: '社会热点', imgUrl: '//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64' },
    { id: uuid(), title: '手绘', imgUrl: '//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64' }
  ],
  "articleList": [{
    "id": uuid(),
    "title": "胡歌12年后首谈车祸",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "https://upload-images.jianshu.io/upload_images/24489823-03cef592f19b9a16?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    "id": uuid(),
    "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "https://upload-images.jianshu.io/upload_images/24489823-03cef592f19b9a16?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    "id": uuid(),
    "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "https://upload-images.jianshu.io/upload_images/24489823-03cef592f19b9a16?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }, {
    "id": uuid(),
    "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
    "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
    "imgUrl": "https://upload-images.jianshu.io/upload_images/24489823-03cef592f19b9a16?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
  }],
  "recommendList": [{
    "id": uuid(),
    "imgUrl": "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
  }, {
    "id": uuid(),
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
  },{
    "id": uuid(),
    "imgUrl": "https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
  },{
    "id": uuid(),
    "imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
  }],
  "writerList": [{
    "id": uuid(),
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "title": "董克平日记"
  },{
    "id": uuid(),
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "title": "Hobbit霍比特人"
  },{
    "id": uuid(),
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "title": "卢璐说"
  },{
    "id": uuid(),
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "title": "董克平日记"
  },{
    "id": uuid(),
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/7133325/f4370cf6-cf4d-4839-9b54-87beaa767d48?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "title": "Hobbit霍比特人"
  },{
    "id": uuid(),
    "imgUrl": "https://upload.jianshu.io/users/upload_avatars/301940/189d69dd-af7c-4290-9e2c-89e98acf3603.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
    "title": "卢璐说"
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}