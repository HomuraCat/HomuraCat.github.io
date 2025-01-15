<template>
  <div class="notion-comment-wrapper">
    <!-- 高亮的文字区域 -->
    <span
      class="notion-comment-highlight"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      {{ content }}
    </span>

    <!-- 评论卡片，只有在 isHovered 为 true 时显示 -->
    <transition name="float-fade">
      <div v-if="isHovered" class="notion-comment-card">
        <div class="comment-header">
          <!-- 头像（用首字母或图片） -->
          <div class="comment-avatar">
            <div v-if="avatar" class="avatar-img-wrapper">
              <img :src="avatar" alt="Avatar" />
            </div>
            <div v-else class="avatar-initial">
              {{ authorInitial }}
            </div>
          </div>
          <div class="comment-meta">
            <div class="comment-author">{{ author }}</div>
            <div class="comment-date">{{ date }}</div>
          </div>
        </div>
        <div class="comment-body">{{ comment }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NotionCommentHighlight',
  props: {
    content: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: 'HomuraCat',
    },
    date: {
      type: String,
      default: '2d',
    },
    avatar: {
      type: String,
      default: '/images/Avatar.jpg', // 若要自定义头像，传入图片 URL
    },
  },
  data() {
    return {
      isHovered: false,
    };
  },
  computed: {
    authorInitial() {
      // 如果未传头像，则显示作者名首字母
      return this.author?.charAt(0) || 'U';
    },
  },
  methods: {
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
    },
  },
};
</script>

<style scoped>
/* 
  外层容器，保证评论卡片能相对高亮文字定位
*/
.notion-comment-wrapper {
  position: relative;
  display: inline-block;
}

/* 
  高亮文字：
  - 鼠标离开时：背景 #FFF9E6；下划线 #FFE9A7
  - 鼠标悬停时：背景 #FFF2CF；下划线 #FFCB00 
*/
.notion-comment-highlight {
  background-color: #FFF9E6;      /* 默认背景 */
  border-bottom: 1px solid #FFE9A7;  /* 默认下划线 */
  cursor: pointer;
  padding: 0 2px;
  transition: background-color 0.15s ease, border-color 0.15s ease;
}

.notion-comment-highlight:hover {
  background-color: #FFF2CF;
  border-bottom-color: #FFCB00;
}

/* 
  评论卡片：在右侧显示 
  这里用 absolute + left: 110% 简单演示 
  若想在更右侧，或跟随页面滚动，请考虑 position: fixed + 计算位置
*/
.notion-comment-card {
  position: absolute;
  top: 50%;      
  left: 110%;    
  transform: translateY(-50%);
  min-width: 200px;
  max-width: 260px;
  background-color: #fafafa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  padding: 12px;
  z-index: 999;
}

/* 评论头部（头像 + 作者 + 日期） */
.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.comment-avatar {
  width: 36px;
  height: 36px;
  margin-right: 8px;
}
.avatar-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.avatar-initial {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #555;
}

/* 评论信息 */
.comment-meta {
  line-height: 1.2;
}
.comment-author {
  font-size: 14px;
  font-weight: 500;
  color: #444;
}
.comment-date {
  font-size: 12px;
  color: #999;
}

/* 评论主体 */
.comment-body {
  font-size: 14px;
  color: #333;
}

/* 
  出现/消失动画：淡入 + 微浮动 
*/
.float-fade-enter-active,
.float-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.float-fade-enter-from,
.float-fade-leave-to {
  opacity: 0;
  transform: translateY(-55%) scale(0.95); 
}
</style>
