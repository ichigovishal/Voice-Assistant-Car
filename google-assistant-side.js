var role = GoogleAssistant.voiceTriggerWithOneTextAndOneNumberIngredient.TextField.toLowerCase()

var work = GoogleAssistant.voiceTriggerWithOneTextAndOneNumberIngredient.NumberField

var postRole = ''
var postAction = ''
var postWork = ''
var forward = RegExp("forward*")
var backward = RegExp("backward*")
var left = RegExp("left*")
var right = RegExp("right*")
var move = RegExp("move*")
var rotate = RegExp("rotate*")


if(move.test(role)){
  postRole = 'move'
  if(forward.test(role)){
    postAction = 'forward'
  }
  else if(backward.test(role)){
    postAction = 'backward'

  }
  postWork = work
}
else if(rotate.test(role)){
    postRole = 'rotate'
  if(left.test(role)){
    postAction = 'left'
  }
  else if(right.test(role)){
    postAction = 'right'

  }
  postWork = work

}


MakerWebhooks.makeWebRequest.setBody(`role=${postRole}&action=${postAction}&work=${postWork}`)
