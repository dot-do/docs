---
$id: https://apis.do/create
$type: https://schema.org.ai/Verb
action: create
actor: creator
act: creates
activity: creating
result: creation
event: created
property:
  createdAt: 
relationships:
  - createdBy
  - createdIn
  - createdFor
inverse:
  - delete
  - destroy
---


```tsv
from                                  event     reverse      to
https://apis.do/users/john@agents.do  created   createdBy    https://apis.do/payment_fsghjasjkfadsjk 
```