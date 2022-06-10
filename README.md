# Visual Thinking Api
Este proyecto fue hecho para poner en practica los conocimientos adquiridos respecto al uso de dependencias como Express, eslint y Jest.
Mediante este proyecto, el usuario puede consultar, mediante un servidor,  una lista de alumnos alojada en un archivo json. 
Si desea ver el servidor remoto de la API, está en esta dirección <code>https://stark-inlet-21661.herokuapp.com/</code>

## Caracteristicas de proyecto

<i><h3>Dependencias necesarias</h3></i>

<dl>
    <dt>Jest</dt>
        <dd>Llevar a cabo las pruebas unitarios necesarias de cada módulo</dd>
    <dt>Express</dt>
        <dd>Crear el servidor y comunicar entre este y el usuario</dd>
    <dt>eslint</dt>
        <dd>Corregir posibles problemas dentro del código y aplicar un formato</dd>
</dl>
<hr>

<i><h3>Estrutura</h3></i>

```mermaid
flowchart TD
    virtualpartners.Json-->Reader-->VisualPartnerFilter-->VisualPartnerController-->Server
```
Donde:
<dl>
<dt>Reader</dt>
<dd>Interpreta el archivo Json y almacena envía sus datos

```mermaid
classDiagram
class Reader{
    +static returnFile(path)
}
```
* <b>returnFile</b>:<br>-El módulo recibe la ubicación del archivo JSON a leer (path).<br>-Los datos del archivo los almacena y lo envía como respuesta 
</dd>
<dt>VisualPartnerFilter</dt>
<dd>Procesa los datos interpretados por "Reader" y filtra la información de acuerdo a los requisitos solicitados</dd>

```mermaid
classDiagram
class VisualPartnerFilter{
    +static getVirtualPartners()
    +static getEmailsWithCertification()
    +static getStudentsWith500Credits()
}
```
* <b>getVirtualPartners()</b>:<br>-Se encarga de enviar la ubicación del archivo JSON al módulo Reader,y almacena la lista de datos de los estudiantes de VirtualPartners<br>
* <b>getEmailsWithCertification()</b>:<br>-Con la lista obtenida por <i>getVirtualPartners()</i>, filtra a los estudiantes cuyo value para la key "haveCertification" sea el valor booleano <i>True</i>.<br>-Ya almacenados los datos de los estudiantes filtrados, envía como respuesta un array con el "email" de cada estudiante<br>
* <b>getStudentsWith500Credits()</b>:<br>-Con la lista de datos obtenida por <i>getVirtualPartners()</i>, filtra a los estudiantes cuyo value para la key "credits" sea mayor a 500, y los envia como respuesta. 
</dd>


<dt>VisualPartnerController</dt>
<dd>Recibe la solicitud de información del "Server", la cual envía al método en "VisualPartnerFilter" correspondiente.</dd>

```mermaid
classDiagram
class VisualPartnerController{
    +static getStudentsVirtualP()
    +static getEmailsVirtualPv()
    +static getStudentsVPCredits()
}
```
* <b>getStudentsVirtualP()</b>:<br>-Recibe la petición de server.js<br>-Llama al método <i>getVirtualPartners()</i> en VisualPartnerFilter, obteniendo la lista de datos de los estudiantes <br>-Envía como respuesta los datos<br>
* <b>getEmailsVirtualPv()</b>:<br>-Recibe la petición de server.js<br>-Llama al método <i>getEmailsWithCertification</i> en VisualPartnerFilter, obteniendo la lista de emails de los estudiantes con "Certification"<br>-Envía como respuesta el array<br>
* <b>getStudentsVPCredits()</b>:<br>-Recibe la petición de server.js<br>-Llama al método <i>getStudentsWith500Credits</i> en VisualPartnerFilter, obteniendo la lista de datos de estudiantes cuyos valor en "Credits" sea mayor que 500<br>-Envía como respuesta los datos filtrados<br>
</dd>



<dt>Server</dt>
<dd>Responde la solicitudes del usuario
</dd>
</dl>

<hr>

## Requisitos
>Contar con NPM instalado
<hr>

## Instalación
>1) Clonar el repo al ordenador<br><code>git clone https://github.com/ErickMontesDK/VIsual-Thinking-Api </code>
>2) Instalar el paquete y dependencias en la carpeta de proyecto <br><code>npm install </code>
<hr>

## Consulta
La API se encuentra accesible para cualquier persona en un servidor, pero si quiere revisar el código y tener un servidor local, lea la siguiente información:

### Consulta en servidor local

Las rutas o "endpoints" declaradas para consulta de información son las siguientes
Primero es iniciar el servidor <code>npm run server</code>

* <b>Datos de estudiantes:</b>

> Ingresar url <code>http://localhost:3000/virtualpartners/students</code><br>
Devuelve la lista de datos de todos los estudiantes de VirtualPartners

* <b>Emails de estudiantes con certificado</b>

>Ingresar url <code>http://localhost:3000/virtualpartners/emails/certificate/</code><br>
Devuelve la lista de emails de todos los estudiantes de VirtualPartners que tengan certificación <i>"haveCertification:true"</i>.

* <b>Estudiantes con creditos mayores a 500</b>

>Ingresar url <code>http://localhost:3000/virtualpartners/students/fullcredits</code><br>
Devuelve la lista de estudiantes de VirtualPartners cuyo valor de credits sea mayor a 500

### Consulta servidor remoto
La API se encuentra en el URL: <code>https://stark-inlet-21661.herokuapp.com/</code>. Ahí mismo estan los links hacia las opciones de consulta.



