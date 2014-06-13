#pragma strict

function Start () {
}

function Update () {
}

function OnBecameInvisible() {
  //transform.parent.gameObject.AddComponent("GameOverScript");
  Application.LoadLevel("scene1");
  Destroy(gameObject);
}

function FixedUpdate () {
}

function Awake () {

}