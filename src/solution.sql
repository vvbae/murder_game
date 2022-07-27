-- CHAPTER 1.

-- Get crime scene report
select *
from bus_crime_scene_reports
where date = '2009-11-09'
and type = 'murder';

-- Get location from the crime report
select location
from bus_crime_reports b
join (
    select *
    from bus_crime_scene_reports
    where date = '2009-11-09'
    and type = 'murder'
) x
on b.report_id = x.report_id;

-- Find the interviews
select b.name, transcript from 
bus_interviews b
join (
    select *
    from bus_person
    where address like '%MACHACA ST%'
) x
on x.name = b.name;

-- Find the murder location
select address 
from bus_person
where name = 'Mattheus Gumey';

-- Find the victim
select *
from bus_person b
join (
    select address 
    from bus_person
    where name = 'Mattheus Gumey'
) x
on b.address = x.address
where gender = 'Female';

-- Find interviews from same building residents
select *
from bus_person b
join (
    select address 
    from bus_person
    where name = 'Mattheus Gumey'
) x
on b.address = x.address;

-- Check who visited the apartment from 10pm to 12am
select name
from bus_apartment_checkin
where SUBSTRING(checkin_time, 0, 3) in ('10', '11', '12');

-- Check the interviewes for the people 
-- who visited the apartment from 10pm to 12am
select b.name, transcript from
bus_interviews b
join (
    select name
    from bus_apartment_checkin
    where SUBSTRING(checkin_time, 0, 3) in ('10', '11', '12')
) x
on b.name = x.name;

-- Check the criminal records on the people 
-- who visited the apartment from 10pm to 12am
select * from
bus_criminal_records b
join (
    select name
    from bus_apartment_checkin
    where SUBSTRING(checkin_time, 0, 3) in ('10', '11', '12')
) x
on b.name = x.name;

-- Get information on Michael Takos
select * from
bus_person
where name = 'Michael Takos';



-- CHAPTER 2.

-- Find the crime scene reports
select *
from oyc_crime_scene_reports
where date = '2008-09-28'
and type = 'murder';

-- Get the club event id and event description
select *
from oyc_club_events
where date = '2008-09-27';

-- Get victim
select *
from oyc_person
where name like '%Tim%'
and gender = 'Male';

-- Get colleagues of the victim
select o.name
from oyc_person o
join (
    select *
    from oyc_person
    where name like '%Tim%'
    and gender = 'Male'
) x
where o.company = x.company;

-- Get transcripts of the colleagues
select i.name, transcript
from oyc_interviews i
join (
    select o.name
    from oyc_person o
    join (
        select *
        from oyc_person
        where name like '%Tim%'
        and gender = 'Male'
    ) x
    where o.company = x.company
) y
where i.name = y.name;


-- Find the people who used to live in NY
-- But lives in MA now and also attended the
-- event on 2008-09-27
select *
from oyc_club_guest_list o
join (
    select *
    from bus_person
    where prev_reside_state = 'NY'
) x
on o.guest_name = x.name
where event_id = '1675';
