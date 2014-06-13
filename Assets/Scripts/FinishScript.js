#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D () {
	try {
		transform.FindChild("Fireworks").GetComponent(ParticleSystem).Play();
	}
	catch(err) {
	}
}