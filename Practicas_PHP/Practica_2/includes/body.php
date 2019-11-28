<div class="encabezado text-center">
    <h1>Práctica Nº2 Validación</h1>
</div>
<div class="cuerpo">
    <div class="container center_div" id="header">
        <h2>Datos del usuario</h2>
    </div>
    <div class="container center_div">
        <center>
        <form action="varpost.php" method="post">
            <label for="name">Nombre
                <input type="text" name="name" class="form-control"/>
            </label>
            <br>
            <label for="surname">Apellido
                <input type="text" name="surname" class="form-control"/>
            </label>
            <br>
            <label for="bio">Biografía
                <textarea name="bio" class="form-control" cols="30" rows="10"></textarea>
            </label>
            <br>
            <label for="email">Email
                <input type="email" name="email" class="form-control"/>
            </label>
            <br>
            <label for="image">Imagen
                <input type="file" name="image" class="form-control"/>
            </label>
            <br>
            <label for="password">Contraseña
                <input type="password" name="password" id="form-control"/>
            </label>
            <br>
            <label for="role">Perfil
                <select name="role" class="form-control">
                    <option value="0">Normal</option>
                    <option value="1">Administrador</option>
                </select>
            </label>
            <br>
            <input type="submit" value="Enviar" name="submit" class="btn btn-success"/>
        </form>
</center>
    </div>
</div>