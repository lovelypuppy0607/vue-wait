export default {
  props: {
    width: {
      type: String,
      default: '100'
    },
    height: {
      type: String,
      default: '100'
    }
  },
  template: `
    <svg style='vertical-align: middle' :width='width' :height='height' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-heart"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g transform="translate(50 50)"><g><g transform="translate(-50 -50)"><path d="M90,30.2c0-11-9-20.1-20-20.1s-20,9.1-20,20.2c0,0.2,0-0.3,0,0.7H50c0-1,0-0.6,0-0.8c0-11-9-20.1-20-20.1s-20,9.1-20,20.2 c0,0.2,0-0.3,0,0.7h0c0.3,20,30,39.5,40,55c10-15.5,39.7-35,40-55h0C90,30,90,30.4,90,30.2z" fill="#f02"></path></g><animateTransform attributeName="transform" type="scale" from="1.3" to="0.9" dur="1s" repeatCount="indefinite" calcMode="spline" values="1.3;0.9;1.1;0.9" keyTimes="0;0.3;0.301;1" keySplines="0 0.75 0.25 1;0 1 0 1;0 .75 .25 1"></animateTransform></g></g></svg>
  `
};
