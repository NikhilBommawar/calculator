

export default function Login(){
    return <>
  <form class="form-signin" method="post" action="/jwt4/login">
  <h2 class="form-signin-heading">Please sign in</h2>
  <p>
    <label for="username" class="sr-only">Username</label>
    <input type="text" id="username" name="username" class="form-control" placeholder="Username" required="" autofocus="" fdprocessedid="lh8cc"/>
  </p>
  <p>
    <label for="password" class="sr-only">Password</label>
    <input type="password" id="password" name="password" class="form-control" placeholder="Password" required="" fdprocessedid="btq8zx"/>
  </p>
  <button class="btn btn-lg btn-primary btn-block" type="submit" fdprocessedid="m3up4">Sign in</button>
</form>
</> 
}