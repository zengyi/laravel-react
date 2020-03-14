<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Task;
use Faker\Generator as Faker;

$factory->define(Task::class, function (Faker $faker) {
    return [
        'name' => $faker->sentence($nbWords = 6, $variableNbWords = true),
        'completion_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        'archived' => $faker->boolean($chanceOfGettingTrue = 50),
    ];
});
