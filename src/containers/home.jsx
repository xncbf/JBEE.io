import React, { Component } from 'react'
import { ThumbnailItem } from '../components/thumbnail-item'

const BASE_LINE = 80

export default class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.totalCount = props.posts.length
    this.countOfInitialPost = props.countOfInitialPost

    this.state = {
      currentCount: 1,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
  }

  handleScroll() {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.updateStatus())
    }
  }

  updateStatus() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    const isTriggerPosition = distanceToBottom < BASE_LINE

    if (!isTriggerPosition) {
      this.ticking = false
      return
    }

    const { totalCount, countOfInitialPost } = this
    const { currentCount } = this.state
    const isNeedLoadMore = totalCount > currentCount * countOfInitialPost

    if (isNeedLoadMore && isTriggerPosition) {
      this.setState(
        prevState => ({
          currentCount: prevState.currentCount + 1,
        }),
        () => {
          this.ticking = false
        }
      )
    }
  }

  render() {
    const { posts, countOfInitialPost } = this.props
    const { currentCount } = this.state
    const countOfItem = currentCount * countOfInitialPost

    return posts
      .slice(0, countOfItem)
      .map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${index}`} />
      ))
  }
}
