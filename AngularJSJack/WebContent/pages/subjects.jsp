<p>Subjects:</p>
<table>
   <tr>
      <th>Name</th>
      <th>Marks</th>
   </tr>
   <tr ng-repeat="subject in student.subjects">
      <td>{{ subject.name }}</td>
      <td>{{ subject.marks }}</td>
   </tr>
</table>