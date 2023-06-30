--select first , last , interests
--from customers
--where dob < ISODate('1990-01-01T00:00:00.000+0000')
--and interests like '%database%'
--order by last , first;

select first , last , interests 
from customers
where dob < ISODate('1990-01-01T00:00:00.000+0000')
    and (interests like '%database')
        or interests like '%gaming'
order by last , first ; 