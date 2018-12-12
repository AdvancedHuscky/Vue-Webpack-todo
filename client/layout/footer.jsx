import '../assets/styles/footer.styl'
export default {
  data () {
    return {
      author: 'someone'
    }
  },
  render (h) {
    // h auto-injection,so you can drop the (h) parameter.
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
}
