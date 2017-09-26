tool.minDistance = 20;

function onMouseDrag(event) {
	var circle = new Path.Circle({
		center: event.middlePoint,
		radius: event.delta.length / 2
	});
	circle.fillColor = 'grey';
}