#include "factorial.h"

int factorial( int number ) {
	return number <= 1 ? number : factorial( number - 1 ) * number;  // fail
	// return number <= 1 ? 1      : Factorial( number - 1 ) * number;  // pass
};
