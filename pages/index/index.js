const app = getApp()

Page({
  data: {
    prompt: '',
    optimized: '',
    isLoading: false
  },

  handlePromptChange(e) {
    this.setData({
      prompt: e.detail.value,
      optimized: '' // 清除之前的优化结果
    })
  },

  async handleOptimize() {
    if (!this.data.prompt.trim()) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none',
        duration: 2000
      })
      return
    }

    this.setData({ isLoading: true })

    try {
      // 调用云函数进行优化
      const { result } = await wx.cloud.callFunction({
        name: 'optimizePrompt',
        data: {
          prompt: this.data.prompt
        }
      })

      this.setData({
        optimized: result,
        isLoading: false
      })

      wx.showToast({
        title: '优化成功',
        icon: 'success',
        duration: 2000
      })
    } catch (error) {
      console.error('Failed to optimize prompt:', error)
      wx.showToast({
        title: '优化失败，请稍后重试',
        icon: 'error',
        duration: 2000
      })
      this.setData({ isLoading: false })
    }
  },

  handleCopy() {
    wx.setClipboardData({
      data: this.data.optimized,
      success: () => {
        wx.showToast({
          title: '已复制到剪贴板',
          icon: 'success',
          duration: 2000
        })
      }
    })
  }
})